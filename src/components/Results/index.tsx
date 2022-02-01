import React, { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ajax } from "rxjs/ajax";
import { debounceTime, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs/internal/Subject";
import { API_KEY, API_URL } from '../../Constants';
import { Container } from '../../designSystem/Container';
import List from '../../designSystem/List';

const Results = () => {
    let [searchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const [searchSubject] = useState(() => new Subject<string | null>());
    const query = searchParams.get('query');
    
    useLayoutEffect(() => {
        const subscription = searchSubject
            .pipe(debounceTime(500))
            .subscribe((search: string | null) => {
                if (!search) {
                    setItems([]);
                    return;
                }
                ajax(`${API_URL}/search/multi?api_key=${API_KEY}&query=${search}`)
                    .pipe(
                        takeUntil(searchSubject)
                    )
                    .subscribe((results: any) => setItems(results.response.results));
            });

        return () => {
            searchSubject.next('');
            subscription.unsubscribe();
        };
    }, [searchSubject])

    useLayoutEffect(() => {
        searchSubject.next(query);
    }, [query, searchSubject]);

    return (
        <div>
            {!!items.length ? (
                <Container>
                   <List items={items} />
                </Container>
            ) : !items.length && !!query ? (
                <p>Nothing found</p>
            ) : (
                <p>Nothing to see here</p>
            )}
        </div>
    )
}

export default Results;