class Github {
    constructor() {
        // this.client_id = '95ee1928a25802da64e2';
        // this.client_secret = '5e1941228d8fe7b267d897511ce95adef9245df7'


        //seems that this Authorization had been broken
        this.config = {
            headers: {
                Authorization: 'token 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'
            }
        }


    }


    async getUser(user) {
        const responseProfile = await fetch(`https://api.github.com/users/${user}`, this.config);
        const responseRepos = await fetch(`https://api.github.com/users/${user}/repos`, this.config);
        const profile = await responseProfile.json();
        const repos = await responseRepos.json();
        console.log(repos)
        return {
            profile,
            repos
        }


    }
}





