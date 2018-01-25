import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './surveys/SurveyList';



const Dashboard = () => {
	return (
	<div>
		<SurveyList />
		<div style={{textAlign: 'center'}}>
			<h1>
				Feedback
			</h1>
			Collect feedback from your users.
			Click the red button below to get started.
			We connect small businesses to their customers. If you have any questions please feel free to contact us at Info@feedback.com.

		</div>
		<div className="fixed-action-btn">
    <Link to="/surveys/new" className="btn-floating btn-large red">
      <i className="large material-icons">add</i>
    </Link>

  </div>
	</div>
);
}

export default Dashboard;
