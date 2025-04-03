import { useEffect, useState } from 'react';

function QuizPage() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);


    useEffect (() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://opentdb.com/api_category.php');
                const data = await response.json();
                setCategories(data.trivia_categories)
            } catch (error) {
                setError('Failed to fetch categories');
            }
        };
        fetchCategories();
    }, []);

    return (
        <>
        <h2>Select a Category:</h2>
        <select onChange={(e) => setSelectedCategory(e.target.value)} defaultValue="">
            <option value="" disabled>Select a Category</option>
            {categories.map((category) =>
           <option key={category.id} value="{category.id}">
            {category.name}
            </option> )}
        </select>
        </>
    )
}
export default QuizPage;