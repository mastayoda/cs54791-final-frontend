$(document).ready(function () {

  /* Adding highlight function */
  $.fn.wrapInTag = function(opts) {

    var tag = opts.tag || 'strong',
      color = opts.color || 'black',
      words = opts.words || [],
      regex = RegExp(words.join('|'), 'gi'),
      replacement = '<'+ tag +' style="color:'+color+'">$&</'+ tag +'>';

    return this.html(function() {
      return $(this).text().replace(regex, replacement);
    });
  };

  /* Initializing Search Box */
  $.typeahead({
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

      onSubmit: function (node, form, item, e) {

        /* Clear the ranking list and hide it */
        if(node.val() === "")
        {
          $('.input-group').effect("shake", {}, 300)
          return;
        }

        /* No item selected, do a full search */
        if(item === null)
        {
          generateRankin(node.val());
        }
        /* Item Selected, list this one first and list others next */
        else
        {
          generateRankinWithSelectedItem(item);
        }

      }
    },
    debug: true
  });

  /* Fading in the body and bounce the logo*/
  $('body').fadeIn(function () {
    /* After fading in, bounce the logo */
    $('#logTitlContain').effect("bounce", {direction: 'up', distance: 100, times: 4}, 500, function () {
      $('#q').effect("highlight", {}, 1000);
    });
  });

});

/*
* This function will generate the ranking list, with the selected
* item as the top ranked result. Subsequent items are retrieved by
* stemming the query and ask Solr for results.
* @param {Object} selected item from the auto complete.
 */
function generateRankinWithSelectedItem(item)
{
  var rankDiv  = $($(".media")[0]);
  var markup;

  /* Extracting markup */
  //markup = getListMarkup(item);
  //rankDiv.append(markup);

  /* Get subsequent items for the rankin */
  generateRankin(item.message);

}

/*
 * Tokenize the query and query Solr for results.
 */
function generateRankin(query)
{

  /* Build Query */
  query =  buildQuery(query);

  /* Query Solr with tokens */
  solrQueryRequest(query);

}

/*
 * build query from tokens.
 * @param {String} Raw query, with all punctuation marks.
 */
function buildQuery(rawQry)
{
  /* Sanitize query */
 var query = sanitizeQuery(rawQry);
 var tokens =  query.split(" ");

  var finalQry = "";
  /* Building query */
  for(var i = 0;i < tokens.length;i++)
  {
    finalQry+= "message:"+tokens[i];
    if(i+1 < tokens.length)
      finalQry+= " OR ";
  }

  /* attach last searched tokens to global window object */
  window.gTokens = tokens;

  return finalQry;
}

/*
 * Request Solr query data using Ajax and JSONP.
 * @param {String} Raw query, with all punctuation marks.
 */
function sanitizeQuery(query)
{
  var clean = query.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var final = clean.replace(/\s{2,}/g," ");

  return final;
}

/*
 * Request Solr query data using Ajax and JSONP.
 * @param {String} The search query.
 */
function solrQueryRequest(query)
{
  $.ajax({
    'url': 'http://solr-ebarsallo29.rhcloud.com/collection1/select',
    'data': {'wt':'json','rows':20, 'q':query},
    'success': solrQueryResponse,
    'dataType': 'jsonp',
    'jsonp': 'json.wrf'
  });
}

/*
 * Request Solr query data using Ajax and JSONP.
 * @param {Object} Ajax response object. Contains Solr results.
 */
function solrQueryResponse(responseObj)
{
  /* Get the response object */
  var response = responseObj.response;
  /* The result array */
  var results = [];
  /* For each document in the response */
  for(var i=0;i<response.docs.length;i++)
  {
      /* Adding ranking */
      response.docs[i].rankin = i+1;
      /* Get this document markup */
      var doc =  getListMarkup(response.docs[i]);
      results.push(doc);
  }
  /* Finally, add the results to the ranking list */
  populateRankingContentAndShow(results);
}

/*
 * This function will generate the ranking list, with the selected
 * @param {Object} Item which will be converted to markup.
 * @return {String} Markup string in ranking item format with the
 *                  provided item information.
 */
function getListMarkup(item)
{

  markup =  '<div class="panel panel-default">' +
              '<div class="item-ranking">' +
                  item.rankin +
              '</div>' +
              '<div class="item-date">' + moment(new Date(item["created_time"])).format('MMMM Do YYYY, h:mm:ss a') +'</div>' +
              '<div class="panel-body">' +

                '<div class="media-left media-left">' +
                  '<a href="#">' +
                  '<img class="media-object" src="images/IPad.png" alt="...">' +
                  '</a>' +
                '</div>' +
                '<div class="media-body">' +
                  '<h4 class="media-heading">'+ item.message +'</h4>' +
                '</div>' +
              '</div>' +
            '</div>';

  return markup;
}

/*
 * This function will highlight the searched words in results
 * @param {Array} All the keys to be highlighted.
 */
function highlight()
{
  $('.media-heading').wrapInTag({
    tag: 'bold',
    color:"#E3AE24",
    words: window.gTokens
  });
}

/*
 * Clear and fade out the ranking list.
 */
function clearRankingContentAndHide()
{
  var rankDiv  = $($(".media")[0]);
  /* Fading out Div */
  rankDiv.fadeOut(function () {
    this.empty();
  }.bind(rankDiv));
}

/*
 * Populate and fade in the ranking list.
 * @param {Array} Array of items to be appended to the
 *                ranking list.
 */
function populateRankingContentAndShow(items)
{
  var rankDiv  = $($(".media")[0]);
  rankDiv.items = items;

  /* Fading out Div to refresh */
  rankDiv.fadeOut(function () {

    /* Clean content */
    this.empty();

    /* Add new content */
    for(var i=0;i<this.items.length;i++)
    {
      this.append(items[i]);
    }

    /* highlight results */
    highlight();
    /* Linkify results */
    $('.media').linkify();

    /* Fade In this div */
    this.fadeIn();
  }.bind(rankDiv));

}
