module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert(
      'BlogPosts',
      [
        {
          id: 1,
          title: 'Post do Ano',
          content: 'Melhor post do ano',
          userId: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          id: 2,
          title: 'Vamos que vamos',
          content: 'Foguete não tem ré',
          userId: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {}
    ),

  down: async (queryInterface, _Sequelize) =>
    await queryInterface.bulkDelete('BlogPosts', null, {}),
};