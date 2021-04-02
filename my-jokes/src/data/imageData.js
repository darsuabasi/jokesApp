// import landingPage from './../assets/landingPage.png';
import dadgif1 from './../assets/dad-gif1.gif';
import dadgif2 from './../assets/dad-gif2.gif';
import dadgif3 from './../assets/dad-gif3.gif';
import dadgif4 from './../assets/dad-gif4.gif';

// no longer using this file but i'll keep because I want to see how much I can manipulate swiper createBundleRenderer
// my theory 

// map through this data and then slice by intervals of 4
// 1 set = 4 images
// for each set, a new swiper should be generated

// things to think about 
// will it generate if its less than 4 in a set?
// ex. 10 images = 10/4= 2.2 so 2 sets + 2 additonal images
// a new cube should still be created with the remaining images/gifs

export const imageData = [

    {
        title: 'Cube Gifs',
        image: dadgif1, 
        alt: 'dad gif'
    },
    
    {
        title: 'Cube Gifs',
        image: dadgif2, 
        alt: 'dad gif'
    }, 

    {
        title: 'Cube Gifs',
        image: dadgif3, 
        alt: 'dad gif'
    },

    {
        title: 'Cube Gifs',
        image: dadgif4, 
        alt: 'dad gif'
    },

    
]

export default imageData;