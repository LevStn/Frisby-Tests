const frisby = require("frisby");
const handlebars = require("handlebars");

describe("Day 17", () => {
  const template = `
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            background-color: #00FFEF;
        }
        
        table th, table td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
    </style>
    
    <table>
        <tr>
            <th>Name</th>
            <th>URL</th>
        </tr>

        {{#each response}}
            <tr>
                <td>{{name}}</td>
                <td>{{url}}</td>
            </tr>
            {{log this}}
        {{/each}}
    </table>
`;
  const compiledTemplate = handlebars.compile(template);

  it("Visualizer", async () => {
    const response = await frisby
      .get("https://pokeapi.co/api/v2/type")
      .expect("status", 200);
    const data = response.json;
    const renderedHTML = compiledTemplate({ response: data.results });

    expect(renderedHTML).toContain("<tr>");

    console.log(renderedHTML);
  });
});
