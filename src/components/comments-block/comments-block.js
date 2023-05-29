import React from  "react";
import "./comments-block.css";


export default function CommentsReviewBlocks() {

    return(
        <div className="comment-review-block">
            <h3>А что наши довольные клиенты говорят о нас?</h3>
            <table className="table" id="reviews-table">
                    <tr>
                        <td id="first-table">
                            <table>
                                <tr>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>Review 1</td>
                                    <td>a</td>
                                </tr>
                                <tr>
                                    <td>Review 2</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                </tr>
                                <tr>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                </tr>
                                <tr>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>Review 3</td>
                                </tr>
                            </table>
                        </td>
                        <td id="second-table">
                            <div>
                                <p>fjdjfksldkslkd</p>
                            </div>
                        </td>
                        <td id="third-table">
                            <table>
                                <tr>
                                    <td>Review 4</td>
                                    <td>c</td>
                                    <td>c</td>
                                    <td>c</td>
                                </tr>
                                <tr>
                                    <td>c</td>
                                    <td>c</td>
                                    <td>c</td>
                                    <td>c</td>
                                </tr>
                                <tr>
                                    <td>c</td>
                                    <td>c</td>
                                    <td>c</td>
                                    <td>c</td>
                                </tr>
                                <tr>
                                    <td>c</td>
                                    <td>c</td>
                                    <td>c</td>
                                    <td>c</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
        </table>
        </div>
    )
}
