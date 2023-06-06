import './Comment.css';

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        //border: "1px solid grey",
        //borderRadius: 16,
        borderBottom: "1px solid gray",
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        //flexDirection: "column",
        //justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 50
    },
    nameText: {
        color: "white",
        fontSize: 16, 
        fontWeight: "bold",
        paddingLeft: 10
    },
    commentText: {
        color: "white",
        fontSize: 16,
        paddingLeft: 10
    },
};

function Comment(props) {
    return (
        <div className="comment-container">
            <div style={styles.wrapper}>
                <div style={styles.imageContainer}>
                    <img src="http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" style={styles.image}/>
                </div>

                {/* <div style={styles.contentContainer}>
                    <span style={styles.nameText}>빅뱅</span>
                    <span style={styles.commentText}>지디 최고</span>
                </div> */}
                <div style={styles.contentContainer}>
                    <div className='com-box'>
                        <span style={styles.nameText}>{props.name}</span>
                        <span style={styles.commentText}>{props.comment}</span>
                    </div>
                    <div>
                        <button className='deleteBtn'>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;