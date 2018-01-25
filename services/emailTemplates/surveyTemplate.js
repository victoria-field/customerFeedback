const keys = require('../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style ="text-align: center;">
          <h3> We would like your feedback!</h3>
          <p>Please answer the following question: </p>
          <p>${survey.body}</p>
          <div>


          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
        </div>
        <div>
          <a href = "${keys.redirectDomain}/api/surveys/${survey.id}/no"> No </a>
        </div>
      </div>
      </div>
      <div>This was sent from Feedback who parteners with great companies to make them better. You can visit us at https://tranquil-island-96902.herokuapp.com for more information</div>
    </body>


    </html>


  `;

};
