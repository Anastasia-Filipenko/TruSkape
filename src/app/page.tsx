import AddCompanyButton from './components/add-company-button';
import CompanyRow from './components/company-row';
import CompanyTable from './components/company-table';
import Header from './components/header';
import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <Header>Companies</Header>
      <CompanyTable>
        <CompanyRow
          id={1}
          category='Products'
          company='Costco'
          status={Status.Pending}
          promotion={true}
          country='USA'
          joinedDate='02.19.2023'
        />
      </CompanyTable>
    </main>
  );
}
