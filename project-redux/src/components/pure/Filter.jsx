
import PropTypes from 'prop-types';


const Filter = ({active, onClick, children}) => {

    if(active){
        return (<span className='active'>{children}</span>)
    }

    return (
        <div className='inline-flex'> 
             <button style={{margin: '5px'}}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded ' 
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
            {children}
        </button>


        </div>
       
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};


export default Filter;
