import {connect} from "react-redux";
import Table from "./Table";
import {filter, getData, searchAndFilter} from "./actions";


const mapStateToProps = (state) => {
    return {
        athletes: state.filteredAthletes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    getData: getData,
    setSearchString: searchAndFilter,
    setFilteredBy: filter
}

const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);
export default TableContainer;
