import {AiFillDelete} from 'react-icons/ai';

const FilterOptions = () => {
	return (
		<div className="d-grid gap-2 d-md-flex justify-content-md-end">
			<button className="btn btn-primary me-md-2" type="button">
				ALL
			</button>
			<button className="btn btn-primary" type="button">
				COMPLETED
			</button>
			<button className="btn btn-primary" type="button">
				PENDING
			</button>
            <button className="btn btn-danger" type="button">
				<AiFillDelete />
			</button>
		</div>
	);
};

export default FilterOptions;
