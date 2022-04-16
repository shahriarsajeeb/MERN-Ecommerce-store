import React from 'react';
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
           <input type="checkbox" id="check" />
           <label for="check">
          <div class="check-icon"></div>
          </label>
        </div>
    )
}

export default Loading
