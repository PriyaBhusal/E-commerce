const fs = require('fs');

async function addHomeVideo(title, description, banner) {
  try {
    const video = fs.readFileSync(videoPath);
   
    const homevideo = await HomeVideo.create({
      title: title,
      description: description,
      video: video
    });
   
    console.log('HomeVideo created:', homevideo);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

addHomeVideo('hello me', 'hi there', './assets/bags.jpg');


