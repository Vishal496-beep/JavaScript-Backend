import express from 'express';

const app = express()

// app.get('/',(req, res) => {
//     res.send('Server is Connected Now')
// })

// list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'a joke',
            content: 'this is first joke'
        },
         {
            id: 2,
            title: 'a second joke',
            content: 'this is the second joke'
        },
         {
            id: 3,
            title: 'a third joke',
            content: 'this is the third joke'
        },
         {
            id: 4,
            title: 'fourth joke',
            content: 'this is fourth joke'
        },
         {
            id: 5,
            title: 'fifth joke',
            content: 'this is joke five'
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
    
})