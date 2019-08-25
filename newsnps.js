$(document).ready(function(){
    
    $("#searchbtn").on("click",function(e){
      e.preventDefault();
      let abc;
      let query = $("#searchquery").val();
      let bbcUrl = 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=048ffc9d22994ee282934f192d1179e9' ;
      let entertainmentUrl ="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=048ffc9d22994ee282934f192d1179e9";
      if(query === "" || query === "entertainment"){
        if(query===""){
          abc = bbcUrl;
        }
        $.ajax({
          
          url: abc,
          method: "GET",
          dataType: "json",
          
          beforeSend: function(){
            $("#loader").hide();
          },
          
          complete: function(){
            $("#loader").hide();
          },
          
          success: function(news){
            let latestNews = news.articles;
      
            
              // output +=`
              //   <div class="col l6 m6 s12">
              //   <h4>${latestNews[i].title}</h4>
              //   <img src="${latestNews[i].urlToImage}" class="responsive-img">
              //   <p>${latestNews[i].description}</p>
              //   <p>${latestNews[i].content}</p>
              //   <p>Published on: ${latestNews[i].publishedAt}</p>
              //   <a href="${latestNews[i].url}" class="btn">Read more</a>
              //   </div>
              // `;
                
                for(var i=0 ; i< latestNews.length ; i++) {
                  
                  $('<div class="item"><img class="d-block img-fluid" src="'+latestNews[i].urlToImage+'"><div class="carousel-caption"><h1 style="margin-bottom:100px">'+latestNews[i].title+'</h1></div>   </div>').appendTo('.carousel-inner');
                  //$('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
                  
              
                }
                $('.item').first().addClass('active');
                $('.carousel-indicators > li').first().addClass('active');
                $('#carousel-example-generic').carousel();
            
            
            if(output !== ""){
               M.toast({
                html: "There you go, nice reading",
                classes: 'green'
              });
              
            }else{
              let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>This news isn't available. Sorry about that.<br>Try searching for something else </div>`;
               $("#newsResults").html(noNews);
              M.toast({
                html: "This news isn't available",
                classes: 'red'
              });
            } 
          },
          
          error: function(){
             let internetFailure = `
             <div style="font-size:34px; text-align:center; margin-top:40px;">Please check your internet connection and try again.
             <img src="img/internet.png" class="responsive-img">
             </div>`;
             
            $("#newsResults").html(internetFailure);
             M.toast({
                html: "We encountered an error, please try again",
                classes: 'red'
              });
          }
          
          
        });
        
      }else{
        let missingVal = `<div style="font-size:34px; text-align:center; margin-top:40px;">Please enter any search term in the search engine</div>`;
        $("#newsResults").html(missingVal);
         M.toast({
                html: "Please enter something",
                classes: 'red'
              });
            
      }
      
    });
    
});