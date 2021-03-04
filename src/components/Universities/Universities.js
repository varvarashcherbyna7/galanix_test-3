import React from 'react';

const Universities = (props) => {
    const { d, index } = props;

    return (
        <div key={index} className="container">
            <h1 className="nameUniversity">{index + 1}. {d.name}</h1>

            <div className="infoUniversity">
                <div><h3>Country:</h3>{d.alpha_two_code} - {d.country}</div>
                <div><h3>Domain:</h3>{d.domains.map((d, i) => {
                    return (
                        <div key={i}>{i + 1}. {d}</div>
                    )
                })}</div>

                <div><h3>Web pages:</h3>
                    {
                            d.web_pages.map((page, index) => {
                                return (
                                    <>
                                        <div key={index}>
                                            <div>{index + 1}. <a href={page}>{page}</a></div>
                                        </div>
                                    </>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Universities;
