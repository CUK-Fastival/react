import './Content.css';
import CommentList from './CommentList';

const Content = () => {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         tweets: [
    //             {
    //                 uuid:1,
    //                 writer: "vip",
    //                 date: "2023-01-01",
    //                 content: "내 말이 빅뱅 ㄹㅇ 언제 컴백함?"
    //             },
    //             {
    //                 uuid:2,
    //                 writer: "권사포",
    //                 date: "2023-08-18",
    //                 content: "지디 보고 싶다"
    //             },
    //         ]
    //     }
    //     this.addTweet = this.addTweet.bind(this);
    // }
    // addTweet(){
    //     let value = document.querySelector('#new-tweet-content').value;
    //     this.setState({tweets: [...this.state.tweets, {
    //         uuid: this.state.tweets.length + 1,
    //         writer: 'vip',
    //         date: new Date().toISOString().slice(0, 10),
    //         content: value
    //     }]})
    // }


    return (
        <div className="content-container">
            <div className="content-box">
                <div className="title">
                    <h3>
                        title
                    </h3>
                </div>
                <div className="writer">
                    <p className="img">img</p>
                    <p>writer</p>
                </div>
                <div className="content">
                    content
                </div>
            </div>

            <CommentList />
        </div>
    )
}

export default Content;