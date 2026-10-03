function showPlan(plan) {

    const result = document.getElementById("result");

    if (plan === "beginner") {

        result.innerHTML = `
            <h3>3-Day Beginner Plan</h3>
            <p>Monday: Full Body</p>
            <p>Wednesday: Full Body</p>
            <p>Friday: Full Body</p>
        `;

    }

    else if (plan === "strength") {

        result.innerHTML = `
            <h3>4-Day Strength Plan</h3>
            <p>Monday: Upper Body</p>
            <p>Tuesday: Lower Body</p>
            <p>Thursday: Upper Body</p>
            <p>Friday: Lower Body</p>
        `;

    }

    else if (plan === "fitness") {

        result.innerHTML = `
            <h3>5-Day Fitness Plan</h3>
            <p>Monday: Strength</p>
            <p>Tuesday: Cardio</p>
            <p>Wednesday: Lower Body</p>
            <p>Thursday: Mobility</p>
            <p>Friday: Full Body</p>
        `;

    }
}