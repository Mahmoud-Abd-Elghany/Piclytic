import AnalysisPage from './analysis-page.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import InvalidPage from '../invalid/invalid-page.component';
import { useSelector } from 'react-redux';

const AnalyzedWithSpinner = WithSpinner(AnalysisPage);
const AnalysisPageContainer = () => {
    const {isLoading, error} = useSelector(state => state.analysis)
    console.log('AnalyzedWithSpinner component', isLoading);
    return( error? 
    <InvalidPage/> 
    :
    <AnalyzedWithSpinner isLoading = {isLoading}/> 
    )
}

export default AnalysisPageContainer