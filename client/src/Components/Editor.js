import React, { useState } from 'react'
import Axios from 'axios'

import baseURL from '../baseURL'

export default function Editor() {
	const changeColor = e => {
		document.execCommand('styleWithCSS')
		let color = e.target.value
		document.execCommand('foreColor', false, color)
		setFocus()
	}

	window.addEventListener(
		'load',
		() => {
			handleButtonClicks('#bold', 'Bold')
			handleButtonClicks('#italic', 'Italic')
			handleButtonClicks('#under', 'Underline')
		},
		false
	)

	const handleButtonClicks = (id, command) => {
		document.querySelector(id).addEventListener('click', () => {
			document.execCommand(command)
			setFocus()
		})
	}

	let currentImage = ''
	const publishBlog = e => {
		e.preventDefault()
		const body = e.target.querySelector('#textField').innerHTML
		const title = e.target[4].value
		Axios.post(baseURL, { title, body, image: currentImage })
	}

	const setFocus = () => {
		document.getElementById('textField').focus()
	}
	function readImage(input) {
		const reader = new FileReader()
		reader.onload = function(e) {
			const img = document.querySelector('#img')
			img.setAttribute('src', e.target.result)
			currentImage = e.target.result
		}
		reader.readAsDataURL(input.target.files[0])
	}

	return (
		<div>
			<form onSubmit={publishBlog}>
				<input style={{ border: 'none' }} type='color' onChange={changeColor} />
				<input id='bold' type='button' value='B' className='actionButton-small' />
				<input id='italic' type='button' value='I' className='actionButton-small' />
				<input id='under' type='button' value='U' className='actionButton-small' />
				<label>
					Title:
					<input maxLength='80' required />
				</label>
				<label>
					Image Link:
					<input
						onChange={readImage}
						accept='image/*'
						type='file'
						className='imageFile'
						id='imageFile'
					/>
					{/* <input required /> */}
				</label>
				<div
					id='textField'
					contentEditable
					name='richTextField'
					style={{
						width: '70%',
						height: '500px',
						margin: 'auto',
						border: '1px solid black',
						float: 'left'
					}}
				></div>
				<div></div>
				<button type='submit' className='actionButton'>
					Publish
				</button>
			</form>
			<img id='img' alt='' style={{ width: '200px', height: '200px' }} />
		</div>
	)
}
