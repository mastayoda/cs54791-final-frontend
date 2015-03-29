$(document).ready(function () {



  ///* Request Solr autocmplete data*/
  //function sorlQueryAutoCompleteRequest(query)
  //{
  //  $.ajax({
  //    'url': 'http://solr-ebarsallo29.rhcloud.com/collection1/select',
  //    'data': {'wt':'json','rows':20, 'q':'message:'+query},
  //    'success': sorlQueryAutoCompleteResponse,
  //    'dataType': 'jsonp',
  //    'jsonp': 'json.wrf'
  //  });
  //}

  ///* Receive Solr autocmplete data*/
  //function sorlQueryAutoCompleteResponse(responseObj)
  //{
  //  /* Get the response object */
  //  var response = responseObj.response;
  //  /* Reinitialize the selling array */
  //  //data.selling = [];
  //  /* Reinitialize the buying array */
  //  //data.buying = [];
  //  /* For each document in the response */
  //  for(var i=0;i<response.docs.length;i++)
  //  {
  //      var doc = response.docs[i];
  //      data.selling.push(doc.message);
  //      data.buying.push(doc.message);
  //  }
  //
  //  $('#q').typeahead({
  //    source: {
  //      Selling: {
  //        data: data.selling
  //      },
  //      Buying: {
  //        data: data.buying
  //      }
  //    }
  //  });
  //
  //}

  /* On Search Box KeyUp event */
  //$('#q').keyup(function(){
  //
  //  var query = this.value;
  //
  //  if(query.length > 2)
  //  {
  //    sorlQueryAutoCompleteRequest(query);
  //  }
  //
  //});


  window.searchBox =  $.typeahead({
    input: "#q",
    minLength: 3,
    dynamic: true,
    order: "asc",
    group: true,
    groupMaxItem: 10,
    hint: true,
    display: "message",
    selector: {
      filter: "input-group-btn",
      filterButton: "btn btn-default",
      dropdown: "dropdown-menu dropdown-menu-right",
      list: "dropdown-menu",
      hint: "form-control",
      highlight: true
    },
    source: {
      Selling: {
        url: [{
          'url': 'http://solr-ebarsallo29.rhcloud.com/collection1/select',
          'data': {'wt':'json','rows':20, 'q':'message:{{query}}'},
          'dataType': 'jsonp',
          'jsonp': 'json.wrf',
          process: function (data) {
              return data;
          }
        },"response.docs"]
      }
    },
    callback: {
      onInit: null,
      onResult: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onClick: function (node, a, obj, e) {

        console.log("You Selected");
      },
      onSubmit: function (node, form, obj, e) {

        console.log("You Submited",obj );

      }
    },
    debug: true
  });

  /* Fading in */
  $('body').fadeIn(function () {
    $('#logTitlContain').effect("bounce", {direction: 'up', distance: 100, times: 4}, 500, function () {
      $('#q').effect("highlight", {}, 1000);
    });
  });

});
