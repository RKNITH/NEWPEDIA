

// source : https://github.com/plenaryapp/awesome-rss-feeds


const textarea = document.querySelector('#feed-textarea > ul');

const date = new Date();
document.querySelector('#date').innerHTML = date.toDateString();

var bbc = 'http://feeds.bbci.co.uk/news/world/asia/india/rss.xml'
var theguardian = 'https://www.theguardian.com/world/india/rss'
var timesofindia = 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms'
var thehindu = 'https://www.thehindu.com/feeder/default.rss'
var indianexpress = 'http://indianexpress.com/print/front-page/feed/'
var google = 'https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN%3Aen&oc=11'


getFeed(thehindu, "The Hindu");
getFeed(bbc, "BBC News - India");
getFeed(indianexpress, "The Indian Express");
getFeed(theguardian, "India - The Guardian");
getFeed(timesofindia, "Times of India");
getFeed(google, "Top Stories - Google News");

function getFeed(url, name) {

    // if (url.includes(`${bbc}`)) {
    //     var head = "BBC News - India";
    //     console.log(head);
    // }


    feednami.load(url, function (result) {
        if (result.error) {
            console.log(result.error)
        }
        else {
            let h5 = document.createElement('h5');
            h5.innerHTML = `<hr> ${name} <hr>`;
            textarea.appendChild(h5);
            // console.log(name);

            var entries = result.feed.entries
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i]

                // console.log(entry.title)
                // console.log(entry.summary)

                let li = document.createElement('li');
                let para = document.createElement('p');


                //add HTML content to list items
                li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`;
                para.innerHTML = entry.summary;


                //append HTML content to list 
                textarea.appendChild(li);
                textarea.appendChild(para);

            }
        }
    })
}


