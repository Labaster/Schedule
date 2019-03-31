module.exports =
    async function setCookies(ctx) {
        await ctx.set('Access-Control-Allow-Origin', '*');
        await ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        await ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
};
