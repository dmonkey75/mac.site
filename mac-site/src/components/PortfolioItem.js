import React, { Component } from 'react';

class PortfolioItem extends Component {
    render() {
        return (
            <div>
                <div className='skew-content'>test content</div>

                <div className='skew-cc' />
                <div className='plain-content'></div>

                <div className='skew-c' />
                <div className='skew-content'>
                    Hello
                </div>
                <div className='skew-cc' />
            </div>

            // <div>

            //     <div class="skew-c"></div>
            //     <div class="colour-block">
            //         <h1>Responsive Skewed Page Dividers.</h1>
            //         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            //     </div> 
            //     <div class="skew-cc"></div>   
            //      <div class="white-block">
            //         <h1>Skewed Counter-Clockwise.</h1>
            //         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            //     </div>
            //     <div class="skew-c"></div>
            //     <div class="colour-block">
            //         <h1>Skewed Clockwise.</h1>
            //         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            //     </div>
            // </div>



            // <div className='skewed'>
            //     <div className='skewed-fake-top'></div>
            //     <div className='skewed-content'>

            //     </div>
            //     <div className='skewed-fake-bottom'></div>
            // </div>
        );
    }
}

export default PortfolioItem;