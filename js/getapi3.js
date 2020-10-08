const api_url = new URL("https://www.googleapis.com/blogger/v3/blogs/6064951405000512251/posts");
            api_url.search = new URLSearchParams({
              key:"AIzaSyC1CIz86nWusMiNvDUXXHnU2ILSyOP6xe0",
              fetchBodies:false,
              fetchImages:true,
              maxResults: maxres,
              labels: label,
            })
            // Defining async function 
            async function getapi(url) { 
              
              // Storing response 
              const response = await fetch(url); 
              
              // Storing data in form of JSON 
              var data = await response.json();
              console.log(data) ;
              shownovel(data); 
            } 
            // Calling that async function 
            getapi(api_url); 
            // Function to define innerHTML for HTML table 
            function shownovel(data) { 
              let tab=''; 
              
              // Loop to access all rows 
              for (let r of data.items) { 
                let imgurl = '';
                if(r.images != undefined){
                  for (z of r.images)
                  var rl = z.url .split( '/' );
                  console.log(rl)
                  if (z.url.includes("bp.blogspot.com")){
                    imgurl += "https://"+rl[2]+"/"+rl[3]+"/"+rl[4]+"/"+rl[5]+"/"+rl[6]+"/"+imgsize+"/"+rl[8]
                  }else{
                    imgurl+=z.url
                  }

                }
                else{
                  imgurl += "https://fiik346.github.io/img/noimage2by1.svg";
                };
                tab += 
                `<article class="card">
                <a href="${r.url}"><img class="card-img" src="${imgurl.replace(/\/s[0-9]/, "/"+imgsize)}"/></a>
                <div class="card-body">
                <h3 class="card-title"><a href="${r.url}">${r.title}</a></h3>
                </div>
                </article>`; 
              } 
              document.getElementById("novelist").innerHTML = tab; 
            } 
