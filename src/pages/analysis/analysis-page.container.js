import AnalysisPage from './analysis-page.component'
import { PicContext } from '../../state/picContext';
import { useContext } from 'react';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const AnalyzedWithSpinner = WithSpinner(AnalysisPage);
const AnalysisPageContainer = () => {
    const {isLoading} = useContext(PicContext);
    console.log('AnalyzedWithSpinner component', isLoading);
    return (
        <AnalyzedWithSpinner isLoading = {isLoading}/>
    )
}

export default AnalysisPage