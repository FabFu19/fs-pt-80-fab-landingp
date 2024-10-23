import React from "react";

export const Card = () => {
    return (
        <div className="col-sm-12 col-md-3 col-lg-4 col-xl-3 pb-3 col-edit">
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://cdn.pixabay.com/photo/2024/06/01/18/49/environment-8802931_1280.jpg" className="card-img-top img-fluid" alt="..." />
                <div className="card-body text-center">
                    <h5 class="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis cum ducimus nesciunt beatae, debitis iure, sit provident quaerat impedit, aliquam rem libero optio. Libero, quaerat! Ratione blanditiis sit officiis!</p>
                </div>
                <div className="card-footer d-flex justify-content-center py-3 px-3">
                    <a className="btn btn-primary text-center" href="#" role="button">Find Out More!</a>
                </div>
            </div>
        </div>
    );
}