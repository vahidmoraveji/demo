$(document).ready(function(){
    var network;
    var user;
    var firstTime='2018-08-28',secondTime='2018-09-09';
    var diagramTitle;
    
   
    
    $(".showDetails button").click(function(){
      $(".miningBox .proccess").fadeIn();
    })

    $(".proccessBottom__item button").click(function(){

      if($(this).hasClass('active')){
        $(".proccessBottom__item button.active").next('p').slideToggle();
        $(this).toggleClass('active');
      }
      else{
        $(".proccessBottom__item button.active").next('p').slideToggle();
        $(".proccessBottom__item button").removeClass('active');
        $(this).toggleClass('active');
        $(".proccessBottom__item button.active").next('p').slideToggle();
      }
      

        if($(this).hasClass('active') && $(this).parent().parent().hasClass('sliding')){
          $("#diagramVisual").empty();

          $(".yTitle").html("Rate Of "+$( this ).text());

          var container = document.getElementById('diagramVisual');
        var date = new Date(firstTime);
        var items=[];
      for(var i=0;i<6;i++){
        date.setDate(date.getDate() + i);

        items.push({x:moment(new Date(date)).format('YYYY-MM-DD'),y:Math.floor(Math.random() * 7)*6})
      }
        

          var dataset = new vis.DataSet(items);
          var options = {
            start: firstTime,
            end: secondTime
          };
            var graph2d = new vis.Graph2d(container, dataset, options);
        }
        else{
          $("#diagramVisual").empty();

        }
        
    });
    $(".miningBox#Content .proccess button").hover(function(){
      $(this).next().next('.tooltip').toggleClass('active');
    });
    $(".miningBox#Context .proccess button").hover(function(){
      $(this).next('.tooltip').toggleClass('active');
    });
    $(".miningBox#Activity .proccess button").hover(function(){
      $(this).next('.tooltip').toggleClass('active');
    });
    $("#linear").click(function(){
      var container = document.getElementById('diagramVisual');
      var date = new Date(firstTime);
      var items=[];
    for(var i=0;i<36;i++){
      date.setDate(date.getDate() + i);

      items.push({x:moment(new Date(date)).format('YYYY-MM-DD'),y:Math.floor(Math.random() * 7)*6})
    }
      
      
        var dataset = new vis.DataSet(items);
        var options = {
         
          start: firstTime,
          end: secondTime
        };
        $("#diagramVisual").empty();
          var graph2d = new vis.Graph2d(container, dataset, options);
  })
    $("#bar").click(function(){
      var container = document.getElementById('diagramVisual');
      var date = new Date(firstTime);
      var items=[];
    for(var i=0;i<6;i++){
      date.setDate(date.getDate() + i);

      items.push({x:moment(new Date(date)).format('YYYY-MM-DD'),y:Math.floor(Math.random() * 7)*6})
    }
      
      
        var dataset = new vis.DataSet(items);
        var options = {
          style:'bar',
        barChart: {width:50, align:'center'}, // align: left, center, right
        drawPoints: false,
        dataAxis: {
            icons:true
        },
        orientation:'top',
          start: firstTime,
          end: secondTime
        };
        $("#diagramVisual").empty();
          var graph2d = new vis.Graph2d(container, dataset, options);
  })
    $("#Scatterplot").click(function(){
        var container = document.getElementById('diagramVisual');
        var date = new Date(firstTime);
        var items=[];
      for(var i=0;i<36;i++){
        date.setDate(date.getDate() + i);

        items.push({x:moment(new Date(date)).format('YYYY-MM-DD'),y:Math.floor(Math.random() * 7)*6})
      }
        
        
          var dataset = new vis.DataSet(items);
          var options = {
            sort: false,
            sampling:false,
            style:'points',
            start: firstTime,
            end: secondTime
          };
          $("#diagramVisual").empty();
            var graph2d = new vis.Graph2d(container, dataset, options);
    })
    $(".proccessTop button").click(function(){
        $(this).next('p').slideToggle();
        setTimeout(() => {
            $(this).parent().next('.proccessBottom').addClass('active');
        }, 350);
    });
    $(function() {
        $('input[name="daterange"]').daterangepicker({
          opens: 'top'
        }, function(start, end, label) {
            firstTime=start.format('YYYY-MM-DD');
            secondTime=end.format('YYYY-MM-DD');
        });
      });
     
})


