require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const gitHub = {
  "login": "Vishal496-beep",
  "id": 220682372,
  "node_id": "U_kgDODSdYhA",
  "avatar_url": "https://avatars.githubusercontent.com/u/220682372?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Vishal496-beep",
  "html_url": "https://github.com/Vishal496-beep",
  "followers_url": "https://api.github.com/users/Vishal496-beep/followers",
  "following_url": "https://api.github.com/users/Vishal496-beep/following{/other_user}",
  "gists_url": "https://api.github.com/users/Vishal496-beep/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Vishal496-beep/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Vishal496-beep/subscriptions",
  "organizations_url": "https://api.github.com/users/Vishal496-beep/orgs",
  "repos_url": "https://api.github.com/users/Vishal496-beep/repos",
  "events_url": "https://api.github.com/users/Vishal496-beep/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Vishal496-beep/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vishal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "Vishal2358369",
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2025-07-14T07:03:29Z",
  "updated_at": "2025-12-05T10:00:56Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
    res.send('vishaldotcom')
})

app.get('/login',(req, res) => {
  res.send('<h1>Please login at codersWorld</h1>')
})

app.get('/chai', (req, res) => {
  res.send('<h2> Welcome to chai or codersWorld</h2>')
})

app.get('/github', (req, res) => {
   res.json(gitHub)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
