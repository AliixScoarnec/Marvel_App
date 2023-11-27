/**
 * Prepare the data for the pie chart
 * @param {*} data 
 * @returns 
 */
export const prepareData = (data = []) => {
    const transformData = [
        { name: 'Force', value: data?.force ||0},
        { name: 'Intelligence', value: data?.intelligence ||0},
        { name: 'Energy', value: data?.energy ||0},
        { name: 'Speed', value: data?.speed ||0},
        { name: 'Durability', value: data?.durability ||0},
        { name: 'Fighting', value: data?.fighting ||0}
    ];

    // Remove the elements with undefined values
    return transformData.filter((element) => { return element.value !== undefined; });
}