import FilterContainer from '../containers/FilterContainer';

const Filteroptions = () => {
	return (
		<div className="filters mt-12 ">
			<p>Filter By</p>
			<FilterContainer filter="SHOW_ALL">ALL</FilterContainer>
			<FilterContainer filter="SHOW_ACTIVE">ACTIVE</FilterContainer>
			<FilterContainer filter="SHOW_COMPLETED">COMPLETED</FilterContainer>
		</div>
	);
};

export default Filteroptions;
