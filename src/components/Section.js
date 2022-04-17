import React, {Fragment} from 'react';

function Section({title, list, children}) {
  return (
    <section>
        <h1>{title}</h1>
        <Fragment>
            {
                list ? (
                    list.map(item => {
                        return item
                    })
                ) : (children)
            }
        </Fragment>
    </section>
  );
}

export default Section;
