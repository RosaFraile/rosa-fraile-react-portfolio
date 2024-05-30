import React from 'react';

import profilePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className='right-column'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, sunt, dolorum nihil fuga sit doloremque enim aperiam reprehenderit distinctio maxime natus eaque? Ab laudantium optio, eius totam sed exercitationem repellat!
Placeat nesciunt neque nulla illum expedita, asperiores ex corporis dignissimos quisquam ratione autem reprehenderit accusamus ab aliquid harum explicabo facilis dolores commodi consequatur pariatur quibusdam magni voluptates eaque aliquam! Quam.
Cumque at quae explicabo, quaerat cupiditate tempora dicta. Delectus non, quis ex asperiores quasi consectetur culpa temporibus nostrum saepe aliquam sunt possimus doloremque quia eveniet architecto ad, porro reprehenderit dicta!


        </p>
      </div>
    </div>
  );
}