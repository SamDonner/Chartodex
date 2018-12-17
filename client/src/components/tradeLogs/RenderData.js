import React from 'react';
import classnames from 'classnames';

const RenderData = (base) => {
  return(
    <table className="table">
      <tbody>
        <tr>
          <td className="card-subtitle mb-2 text-muted">24h:</td>
          <td>
            <div className={classnames({"positive card-subtitle": base.day.percent >= 0, "negative card-subtitle": base.day.percent < 0})}>{base.day.percent}%
            </div>
            <div className="card-text"><small className="text-muted">{base.day.profit}</small></div>
          </td>
        </tr>
        <tr>          
          <td className="card-subtitle mb-2 text-muted">7D:</td>
            <td>
              <div 
                className={classnames({"positive card-subtitle": base.week.percent >= 0, "negative card-subtitle": base.week.percent < 0})}>
                  {base.week.percent}%
              </div>
              <div className="card-text"><small className="text-muted">{base.week.profit}</small></div>
            </td>
        </tr>
        <tr>
          <td className="card-subtitle mb-2 text-muted">30D:</td>
            <td>
              <div 
                className={classnames({"positive card-subtitle": base.month.percent >= 0, "negative card-subtitle": base.month.percent < 0})}>
                  {base.month.percent}%
              </div>
              <div className="card-text"><small className="text-muted">{base.month.profit}</small></div>
            </td>
        </tr>
        <tr>
          <td className="card-subtitle mb-2 text-muted">Total:</td>
            <td>
              <div className={classnames({"positive card-subtitle": base.total.percent >= 0, "negative card-subtitle": base.total.percent < 0})}>{base.total.percent}%</div>
              <div className="card-text"><small className="text-muted">{base.total.profit}</small></div>
            </td>
        </tr>
      </tbody>
    </table>
  )
}
export default RenderData;