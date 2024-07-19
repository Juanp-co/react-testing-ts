'use client';
import { UserProfile } from '@/components/UserProfile';
import { UserList } from '@/components/UserList';
import { useState } from 'react';
import { LoginForm } from '@/components/LoginForm';

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [randomText, setRandomText] = useState('');
  const [specificText, setSpecificText] = useState('');
  const [search, setSearch] = useState('');
  const [audi, setAudi] = useState('AUDI');

  return (
    <main>
      <h1>Home page</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text: </label>
        <input
          id="randomText"
          value={randomText}
          onChange={(e) => setRandomText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific Text: </label>
        <input
          id="specificText"
          value={specificText}
          onChange={(e) => setSpecificText(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <input
          value={audi}
          onChange={(e) => setAudi(e.target.value)}
        />
      </div>
      <div>
        {showText && <span>This is the text!</span>}
        <button onClick={() => {
          setTimeout(() => {
            setShowText(!showText);
          }, 1100);
        }}>Show Text</button>
      </div>
      <UserProfile 
        displayName='JuanseJuanseJuanseJuanseJuanseJuanseJuanseJuanseJuanseJuanseJuanse'
        userName='juanse.dev'
        email='juansepinerosh@gmail.com'
        isEmailVerified={true}
      />
      <UserList />
      <LoginForm />
    </main>
  );
}
