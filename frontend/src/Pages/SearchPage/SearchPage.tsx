import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';
import CardList from '../../Components/CardList/CardList';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import Search from '../../Components/Search/Search';
import Hero from '../../Components/Hero/Hero';
import NavBar from '../../Components/NavBar/NavBar';

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setserverError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault()
    const exist = portfolioValues.find((value) => value === e.target[0].value)
    if (exist) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const remove = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    })
    setPortfolioValues(remove);

  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if(typeof result ==="string"){
      setserverError(result);
    }else if(Array.isArray(result.data)){
      setSearchResult(result.data);
    }

  }
  return (
    <div>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange ={handleSearchChange} />
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
      <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
      {serverError && <div>Unable to connect to API</div>}
    </div>
  )
}

export default SearchPage