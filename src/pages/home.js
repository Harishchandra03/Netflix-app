
import React from 'react'
import Row from '../Components/rows'
import Requests from '../requests'
import Main from '../Components/main'

const Home = () => {
    return (
        <div>
            <Main />
            <Row rowID='1' title='UpComing' fetchURL={Requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchURL={Requests.requestPopular} />
            <Row rowID='3' title='Trending' fetchURL={Requests.requestTrending} />
            <Row rowID='4' title='Top Rated' fetchURL={Requests.requestTopRated} />
            <Row rowID='5' title='Horror' fetchURL={Requests.requestHorror} />
        </div>
    )
}

export default Home