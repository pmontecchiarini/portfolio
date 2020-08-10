import React from 'react';
import classes from "./Articles.module.css";
import { Text } from "../../containers/Language";

fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pmontecchiarini.dev')
    .then((res) => res.json())
    .then((data) => {
        // Fillter the array
        const res = data.items //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
        
        function toText(node) {
          let tag = document.createElement('div')
          tag.innerHTML = node
          node = tag.innerText
          return node
       }
        function shortenText(text,startingPoint ,maxLength) {
        return text.length > maxLength?
           text.slice(startingPoint, maxLength):
           text
       }
       
       let output = '';
       posts.forEach((item) => {
          output += `
          <li className="blog__post" style="list-style:none;">
          <hr>
                <div class="blog__content">
                   <div class="blog_preview">
                      <h2 class="blog__title"><a href="${item.link}" style="color: #fa8072; text-decoration:none; font-size:1.2rem; font-weight:500">${shortenText(item.title, 0, 100)}<a/></h2>
                      <div class="blog__date" style="font-family: 'Roboto', sans-serif; font-size:0.9rem; margin:0px">${shortenText(item.pubDate,0 ,10)}</div>
                      <p class="blog__intro" style="font-family: 'Roboto', sans-serif;">${shortenText(toText(item.content),0, 250)+ '...'}</p>
                   </div>
                </div>
          </li>`
       })
       document.querySelector('.blog__slider').innerHTML = output
       
    })

const Articles = () => {

    return(
      <div className={classes.Articles} id="articles">
         <div className= {classes.Container}>
            <h2> <Text tid="articles" /></h2>
            <div class="blog__slider"></div>
         </div>  
      </div>
    )
};

export default Articles;