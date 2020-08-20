// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "language": {
      "sEmptyTable":     "ليست هناك بيانات متاحة في الجدول",
      "sLoadingRecords": "جارٍ التحميل...",
      "sProcessing":   "جارٍ التحميل...",
      "sLengthMenu":   "أظهر _MENU_ مدخلات",
      "sZeroRecords":  "لم يعثر على أية سجلات",
      "sInfo":         "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
      "sInfoEmpty":    "يعرض 0 إلى 0 من أصل 0 سجل",
      "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
      "sInfoPostFix":  "",
      "sSearch":       "ابحث:",
      "sUrl":          "",
      "oPaginate": {
        "sFirst":    "الأول",
        "sPrevious": "السابق",
        "sNext":     "التالي",
        "sLast":     "الأخير"
      },
      "oAria": {
        "sSortAscending":  ": تفعيل لترتيب العمود تصاعدياً",
        "sSortDescending": ": تفعيل لترتيب العمود تنازلياً"
      }
    },
    "responsive": true,
    "columnDefs": [ {
      "targets": 'no-sort',
      "orderable": false,
} ]
  });
});
