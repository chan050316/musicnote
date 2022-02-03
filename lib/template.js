module.exports = {
  HTML: data => {
    return `
    section
      -for(var i = 0; i < 4; i++)
        div.section_Box
          div.day_name 이번주
          div.list_boxs
            -for(a = 0; a < 13; a++)
              div.list 
                input(type="checkbox", name="")
                div.list_Text ${data}
                span.material-icons &#xE14D;
    `;
  },
};
