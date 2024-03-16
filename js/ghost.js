fetch('https://blog.doublemstudios.com/ghost/api/content/posts/?key=51f28152f69e95611b2382d83e')
            .then(res => {
                return res.json();
                // console.log(res);
            })
            .then(data => {
                console.log(data);

                // Blog Post 1 Info
                title1 = data.posts[0].title;
                featureImage1 = data.posts[0].feature_image;
                excerpt1 = data.posts[0].excerpt;
                url1 = data.posts[0].url;
                readingTime1 = data.posts[0].reading_time;

                document.getElementById("title1").insertAdjacentHTML("beforeend",title1);
                document.getElementById("featureImage1").src=featureImage1;
                document.getElementById("readingTime1").insertAdjacentHTML("afterbegin",readingTime1);
                document.getElementById("excerpt1").insertAdjacentHTML("afterbegin",excerpt1);


                // Blog Post 2 Info
                title2 = data.posts[1].title;
                featureImage2 = data.posts[1].feature_image;
                excerpt2 = data.posts[1].excerpt;
                url2 = data.posts[1].url;
                readingTime2 = data.posts[1].reading_time;

                document.getElementById("title2").insertAdjacentHTML("beforeend",title2);
                document.getElementById("featureImage2").src=featureImage2;
                document.getElementById("readingTime2").insertAdjacentHTML("afterbegin",readingTime2);
                document.getElementById("excerpt2").insertAdjacentHTML("afterbegin",excerpt2);

                window.onload=()=>{
                    var element = document.getElementById("blog1");
                    element.href = url1;
                    var element2 = document.getElementById("blog2");
                    element2.href = url2;
                };
            })
            .catch(error  => console.log(error));
