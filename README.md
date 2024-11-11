# Team Picker

> **Note: This project is no longer actively maintained, and the host URL endpoint is no longer active. It has been archived for historical purposes. Feel free to explore the code, but please note that it is no longer in use or supported.**

The Team Picker is a prototype application developed using React and JSX components which allow a user to allocate team members to specific groups. A user can add or remove members from a team group as well as view the full member list of each group. 

On the application, simply click the card of the member you would like to add and remove. If the card has a black highlight, then it is included in the group. To change groups, simply select from the drop-downs and pick the group name that you would like to view or update. 

Click the Teams link on the top left to show an overview of each teams displayed in an accordion list format. 

This application was designed from a sample tutorial for experimental purposes and for testing front-end components with an API. 

## Running the Application Locally

### Prerequisites
Ensure you have Docker installed on your system.

### Build the Docker Image
- Open your terminal and navigate to the directory containing your React app and the Dockerfile.
- Run the following command to build a Docker image:
```bash
docker build -t classic-teams .
```

### Run Your Docker Container
- Once the Docker image is built successfully, you can run a Docker container based on this image with the following command:
```bash
docker run -p 5173:5173 classic-teams
```
- This command maps port 5173 inside the container to port 5173 on your local machine, enabling access to the application through your browser. You should also see the container running in your Docker Desktop app.

### Access the Dockerized React App
- Open your preferred web browser.
- Navigate to [http://localhost:5173](http://localhost:5173).
- You should now be able to interact with the Classic Team Picker application in your browser.
