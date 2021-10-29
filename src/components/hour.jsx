import React from "react";


    var today = new Date();
    var h= today.getHours();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (h <= 12) {
        document.body.style.backgroundImage = "url('https://www.wallpapertip.com/wmimgs/91-915278_pink-watercolour-watercolor-desktop-computer-background.jpg')"
    } else if (h => 12){
        document.body.style.backgroundImage = "url('https://www.wallpapertip.com/wmimgs/28-281867_preview-wallpaper-watercolor-spots-bright-pink-watercolor-background.jpg')"
    };
export class Hour extends React.Component{
    render(){
        return (
            <div id='header' className='display-4 text-center'>Today is {dd}/{mm}/{yyyy}.Rise and Shine!</div>
        );
}

}
export default Hour;
