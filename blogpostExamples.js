const blogPosts = [
	{
		id: 1,
		title: 'Happy Feet',
    	body: `<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus sed expedita ratione? Vero, maiores! Voluptatum odio corporis itaque modi ullam fugiat error.</h2>
    
      <p>Corrupti, beatae? Assumenda, quibusdam. Consequuntur quaerat deserunt nesciunt voluptates quae? Laboriosam id quaerat quod nihil labore praesentium nobis officiis! 
      Repellendus illo rem veritatis vero eius facere dolorum iste laborum unde dolor illum quo enim minus quaerat, quam voluptas natus? Eligendi, placeat beatae hic id maiores 
      ipsum eveniet temporibus ratione exercitationem libero sapiente consequatur adipisci ut commodi sit ducimus dolore, velit accusantium laboriosam excepturi quisquam quo iure.
      Illum debitis vel reprehenderit natus deleniti molestias aliquid delectus, sit voluptas veritatis voluptatem tempore iusto quas iure libero consequuntur magni dolore cupiditate?</p> 
     
      <p>Animi earum saepe accusamus ipsum ducimus quo tenetur est facere similique sit sint ut asperiores dolor labore deserunt, incidunt distinctio quos, amet voluptatum deleniti 
      cupiditate blanditiis expedita sed! Eius facilis voluptatum mollitia praesentium necessitatibus. Delectus temporibus vitae earum rerum qui ex, inventore distinctio accusamus
      ipsa sapiente unde voluptatum. Quod quibusdam eaque mollitia ab beatae quas aspernatur consectetur perferendis, obcaecati itaque ea id quae perspiciatis autem numquam fugiat 
      doloribus, enim qui corporis corrupti nobis nihil illo minima. Tenetur a quam adipisci, obcaecati alias natus dolores iusto quae voluptatibus excepturi saepe exercitationem
      expedita nisi fugiat magni repudiandae quibusdam enim possimus dolorem, eum dicta eligendi quos. Autem similique eaque inventore aliquid maxime suscipit impedit ullam exercitationem!
      Ducimus, explicabo alias. Adipisci eligendi hic quibusdam tenetur, nemo corporis dolorem ipsam beatae, a perferendis modi assumenda autem eius velit minima iure ea aut fugiat</p>
        
      <p>repudiandae facere ipsa consectetur veniam et? Animi natus enim accusantium laboriosam id eius aperiam modi dolor odit unde? Dolor porro fuga vero qui, 
      blanditiis vitae ullam aut dicta fugiat provident mollitia nam sapiente obcaecati modi veritatis adipisci natus quod molestias nemo, at sed! Doloremque a aperiam, 
      voluptate sint quo accusamus perspiciatis.</p>`,
		comments: [
			{
				id: 1,
				name: 'Damn Son',
				comment: 'OH OHHH OHHHH'
			}
		],
		date: new Date(),
		likes: 5,
		image:"https://picsum.photos/200/200"
	},
	{
		id: 2,
		title: 'Happy Feet',
		body: 'Wombo Combo',
		comments: [
			{
				id: 1,
				name: 'Damn Son',
				comment: 'Some variation'
			},
			{
				id: 2,
				name: 'Damn Son',
				comment: 'OH OHHH OHHHH'
			},
			{
				id: 3,
				name: 'Damn Son',
				comment: 'OH OHHH OHHHH'
			}
		],
		date: new Date(),
		likes: 2,
		image:"https://picsum.photos/200/202"
	},
	{
		id: 3,
		title: 'Cool Blog',
		body: 'Lorem Ipsum sucks',
		comments: [
			{
				id: 1,
				name: 'Damn Son',
				comment: 'OH OHHH OHHHH'
			},
			{
				id: 2,
				name: 'Damn Son',
				comment: 'OH OHHH OHHHH'
			},
			{
				id: 3,
				name: 'Damn Son',
				comment: 'OH OHHH OHHHH'
			}
		],
		date: new Date(),
		likes: 14,
		image:"https://picsum.photos/201/200"
	},
	{
		id: 4,
		title: 'Test',
		body: `I am simuilatin<span style="color: rgb(177, 148, 29);">g w</span><span style="color: rgb(70, 136, 98);"><span style="color: rgb(177, 148, 29);">hat would h</span>appen if bal hbalh</span><br>
    2019-09-18T14:56:46.217Z`,
		comments: [],
		date: new Date(),
		likes: 4,
		image:"https://picsum.photos/200/201"
	}
];

module.exports = blogPosts;
