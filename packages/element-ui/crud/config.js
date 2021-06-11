// crud配置文件
export default {
  defaultColumn: [{
    label: '隐藏',
    prop: 'hide'
  }, {
    label: '冻结',
    prop: 'fixed'
  }, {
    label: '过滤',
    prop: 'filters'
  }, {
    label: '筛选',
    prop: 'screen'
  }, {
    label: '排序',
    prop: 'sortable'
  }, {
    label: '顺序',
    prop: 'order',
    hide: true
  }, {
    label: '宽度',
    prop: 'width',
    hide: true
  }],
  clientHeight: document.documentElement.clientHeight,
  // 尺寸
  menuWidth: 220,
  menuFixed: 'right',
  menuXsWidth: 100,
  menuAlign: 'center',
  menuHeaderAlign: 'center',
  headerAlign: 'left',
  // 图标
  cancelBtnIcon: 'el-icon-circle-close',
  viewBtnIcon: 'el-icon-view',
  editBtnIcon: 'el-icon-edit',
  copyBtnIcon: 'el-icon-document-add',
  addBtnIcon: 'el-icon-plus',
  printBtnIcon: 'el-icon-printer',
  excelBtnIcon: 'el-icon-download',
  delBtnIcon: 'el-icon-delete',
  searchBtnIcon: 'el-icon-search',
  emptyBtnIcon: 'el-icon-delete',
  saveBtnIcon: 'el-icon-circle-plus-outline',
  updateBtnIcon: 'el-icon-circle-check',
  columnBtnIcon: 'el-icon-s-operation',
  filterBtnIcon: 'el-icon-tickets',
  refreshBtnIcon: 'el-icon-refresh',
  // 显隐
  viewBtn: false,
  editBtn: true,
  copyBtn: false,
  cancelBtn: true,
  addBtn: true,
  addRowBtn: false,
  printBtn: false,
  excelBtn: false,
  delBtn: true,
  cellBtn: false,
  dateBtn: false,
  updateBtn: true,
  saveBtn: true,
  refreshBtn: true,
  columnBtn: true,
  filterBtn: false,
  queryBtn: true,
  menuBtn: false,
  searchBtn: true,
  clearBtn: true,
  selectClearBtn: true,
  searchShow: true,
  tip: true,
  dialogTop: '100',
  dialogHeight: 'auto',
  dialogWidth: '60%',
  dialogDrag: false,
  formFullscreen: false,
  pageBackground: true,
  simplePage: false,
  page: true,
  menu: true,
  indexLabel: '#',
  indexWidth: 50,
  indexFixed: 'left',
  selectionWidth: 50,
  selectionFixed: 'left',
  expandWidth: 60,
  expandFixed: 'left',
  filterMultiple: true,
  calcHeight: 300,
  title: '表格标题',
  width: '100%',
  searchGutter: 20,
  searchLabelWidth: 80,
  searchSpan: 6,
  dropRowClass: '.el-table__body-wrapper > table > tbody',
  dropColClass: '.el-table__header-wrapper tr',
  ghostClass: 'avue-crud__ghost',
};
