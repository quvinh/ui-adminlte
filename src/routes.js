import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Account = React.lazy(() => import('./views/account/Account'))
// const Profile = React.lazy(() => import('./views/account/Profile'))

// const Status = React.lazy(() => import('./views/status/Status'))

// const Import = React.lazy(() => import('./views/import/Import'))
// const Exports = React.lazy(() => import('./views/exports/Exports'))
// const Reports = React.lazy(() => import('./views/reports/Reports'))

// const HistoryImport = React.lazy(() => import('./views/history/HistoryImport'))
// const HistoryTransfer = React.lazy(() => import('./views/history/HistoryTransfer'))
// const HistoryExport = React.lazy(() => import('./views/history/HistoryExport'))

// const Transfer = React.lazy(() => import('./views/transfer/Transfer'))

// //Warehouse
// const Warehouse = React.lazy(() => import('./views/warehouse/Warehouse'))
// const EditWarehouses = React.lazy(() => import('./views/warehouses/Edit'))
// const AddWarehouses = React.lazy(() => import('./views/warehouses/Add'))
// const ShelfWarehouse = React.lazy(() => import('./views/warehouses/Shelfwarehouse'))

// //Categories
// const Category = React.lazy(() => import('./views/category/Category'))
// const EditCategories = React.lazy(() => import('./views/categories/Edit'))
// const AddCategories = React.lazy(() => import('./views/categories/Add'))

// //Shelves
// const Shelves = React.lazy(() => import('./views/shelf/Shelves'))
// const EditShelves = React.lazy(() => import('./views/shelf/Edit'))
// const AddShelves = React.lazy(() => import('./views/shelf/Add'))

// // Detail_item
// const EditDetailItem = React.lazy(() => import('./views/detail_item/Edit'))

// //Chart
// const Charts = React.lazy(() => import('./views/charts/Charts'))

// //Notification
// const Notification = React.lazy(() => import('./views/notifications/Notification'))
// const AddNotification = React.lazy(() => import('./views/notifications/AddNeedItem'))

// //Supplier
// const Suppliers = React.lazy(() => import('./views/suppliers/Suppliers'))
// const AddSuppliers = React.lazy(() => import('./views/suppliers/Add'))
// const EditSuppliers = React.lazy(() => import('./views/suppliers/Edit'))

// //Role
// const Role = React.lazy(() => import('./views/roles/Role'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
//   { path: '/account', name: 'User', component: Account },
//   { path: '/profile', name: 'Profile', component: Profile },
  { path: '/dashboard', name: 'B???n tin', component: Dashboard },
//   { path: '/charts', name: 'Charts', component: Charts },
//   { path: '/exports', name: 'Th??ng tin xu???t kho', component: Exports },
//   { path: '/status', name: 'Duy???t phi???u', component: Status },
  // { path: '/import', name: 'Nh???p kho', component: Import },
//   { path: '/history_import', name: 'Ki???m k?? t???n kho', component: HistoryImport },
//   { path: '/history_transfer', name: 'Ki???m k?? t???n kho', component: HistoryTransfer },
//   { path: '/history_export', name: 'Ki???m k?? t???n kho', component: HistoryExport },
//   { path: '/reports', name: 'B??o c??o', component: Reports },
//   { path: '/transfer', name: '??i???u ph???i kho', component: Transfer },

  // { path: '/warehouse', name: 'Kho', component: Warehouse },
//   { path: '/warehouses-add', name: 'T???o kho', component: AddWarehouses },
//   { path: '/warehouses-edit/:id', name: 'Ch???nh s???a kho', component: EditWarehouses },
//   { path: '/warehouses-shelf/:id', name: 'k??? trong kho', component: ShelfWarehouse },

  // { path: '/category', name: 'Category', component: Category },
//   { path: '/categories-add', name: 'T???o category', component: AddCategories },
//   { path: '/categories-edit/:id', name: 'Ch???nh s???a category', component: EditCategories },

//   { path: '/shelf', name: 'Gi??', component: Shelves },
//   { path: '/shelf-add/:id', name: 'T???o gi??', component: AddShelves },
//   { path: '/shelf-edit/:id', name: 'Ch???nh s???a kho', component: EditShelves },
//   { path: '/detail_item-edit/:id', name: 'Ch???nh s???a v???t t??', component: EditDetailItem },

//   { path: '/notification', name: 'Th??ng b??o', component: Notification },
//   { path: '/notification-add', name: 'T???o th??ng b??o', component: AddNotification },

//   { path: '/supplier', name: 'Nh?? cung c???p', component: Suppliers },
//   { path: '/supplier-add', name: 'T???o m???i nh?? cung c???p', component: AddSuppliers },
//   { path: '/supplier-edit/:id', name: 'Ch???nh s???a nh?? cung c???p', component: EditSuppliers },

//   { path: '/role', name: 'Ph??n quy???n', component: Role },
]

export default routes
