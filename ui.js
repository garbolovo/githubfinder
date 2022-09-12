//UI class definition

class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
        // this.repos = document.querySelector('#repos')
    }

    //method get User Profile
    showUserProfile(user) {
        console.log(user)
        this.profile.innerHTML = `
        
        <div class="card card-body mb-5">
            <div class="row">
            
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}" alt="image-user-avatar">
                    <a href= "${user.html_url}" target="_blank"
                        
                          
                          <button class="btn btn-primary d-block mb-2" type="button">View Profile</button>
                        
                    
                    
                    </a>
                
                </div>
                
                
                 <div class="col-md-9">
                    <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge bg-success">Followers: ${user.followers}</span>
                    <span class="badge bg-info">Following : ${user.following}</span>
                    
                    <br> <br>
                    
                    <ul class="list-group">
                    <li class="list-group-item"><h6>Name: ${user.name}</h6></li>
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">WebSite/Blog: <a href="${user.blog}"> ${user.blog}</a></li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Created at: ${user.created_at}</li>
                    </ul>
                    
                </div>
            </div>
            
        </div>
        
        <h6 class="page-heading mb-3">Latest Repos</h6>
        <div id="repos"></div>
        
        
        
        `
    }


    //show alert user not found
    showAlert() {
        this.profile.innerHTML = `
        
        <div class="alert alert-warning" role="alert">
            User not found
        </div>
        `

    }

    //Clear User Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // Show Repos
    showUserRepos(repos) {
        // console.log(repos)
        const reposEl = document.querySelector('#repos')

        console.log(reposEl)
        repos.forEach(repo => {
            console.log(repo.name, repo.html_url, repo.description, repo.updated_at)
            reposEl.innerHTML += `
                <ul class="list-group mb-3 border border-primary">
                    <li class="list-group-item">
                    <span class="badge bg-primary">Srars: ${repo.stargazers_count}</span>
                    <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge bg-success">Forks: ${repo.forks_count}</span></li>
                    <li class="list-group-item">Name: <strong>${repo.name}</strong></li>
                    <li class="list-group-item">Link: <a href="${repo.html_url}">${repo.html_url}</a></li>
                    <li class="list-group-item">Description: ${repo.description}</li>
                    <li class="list-group-item">Updated At: ${repo.updated_at}</li>
                    <li class="list-group-item">Language: <mark>${repo.language}</mark></li>
                    </ul>
            `
        })
    }

}