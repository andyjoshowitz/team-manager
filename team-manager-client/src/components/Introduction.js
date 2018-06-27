import React from 'react';

const Introduction = ({userEmail}) =>
	<div className="intro-text">
	  <p>Welcome {userEmail}! This app was created as my final
	  portfolio project for the Full-Stack Web Development Program at the Flatiron School. To check out the project
	  yourself, visit the <a href="https://github.com/andyjoshowitz/team_manager">Group
	  Manager Repository</a> on Github.</p>
	  <p>It was created to help a team of programmers add projects and keep track of task assignment. It also allows students to ask teammates for help if needed. New projects can be submitted and then added as objects to rails via through Redux. Users can then scroll through the list, starting with the most recent submissions, and can see what work is being done. Admin users differ from normal users, in that they are the
	  only ones able to delete reports.</p>
	  <p>Want to run this app locally on your machine?
		<li>Make sure to download the project from Github, and navigate to "team_manager_api" in  your console.</li>
		<li>Run the server entering "rails s -p 3001".</li>
		<li>Then, in a seperate console, navigate to "team_manager_client". Enter "npm install", and then "npm start".</li></p>
  	</div>
export default Introduction;
