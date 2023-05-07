const paraContent  =['I am baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.',
'Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.',
'Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.']

const history = document.querySelector('.history');
const vision = document.querySelector('.vision');
const goals = document.querySelector('.goals');
const paraHeading = document.querySelector('.paraHeading');
const para = document.querySelector('.para');
const image = document.querySelector('img');



history.addEventListener('click',()=>{
    history.classList.add("bgColor")
    history.classList.remove("hoverColor")


    vision.classList.add("hoverColor")
    vision.classList.remove("bgColor")


    goals.classList.add("hoverColor")
    goals.classList.remove("bgColor")

    
    paraHeading.innerHTML = "History"
    para.innerHTML = paraContent[0];
    image.src = "./assets/history.jpeg"
})

vision.addEventListener('click',()=>{
    vision.classList.add("bgColor")
    vision.classList.remove("hoverColor")



    history.classList.add("hoverColor")
    history.classList.remove("bgColor")

    goals.classList.add("hoverColor")
    goals.classList.remove("bgColor")

    paraHeading.innerHTML = "Vision"
    para.innerHTML = paraContent[1];
    image.src = "./assets/vision.jpg"
})

goals.addEventListener('click',()=>{
    goals.classList.add("bgColor")
    goals.classList.remove("hoverColor")


    vision.classList.add("hoverColor")
    vision.classList.remove("bgColor")

    history.classList.add("hoverColor")
    history.classList.remove("bgColor")

    paraHeading.innerHTML = "Goals"
    para.innerHTML = paraContent[2];
    image.src = "./assets/goals.jpg"
})